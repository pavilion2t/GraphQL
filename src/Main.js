import React from "react"
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Product from './Product'
import './Main.css'
import {connect} from 'react-redux'
import { addToCart } from './actions/index'

const GET_DOG = gql`
  query {
    store(id: 4751) {
      title
      listings(search:{offset:0,limit:10,order_by:"id",order_asc:"asc",per_page:10,page:1,include_deleted:true}) {
      id
      price
      quantity
      created_at
      updated_at
      product_id
      blid
      store_id
      web_price
      department_id
      product {
        id
        name
        image_url
        description
        barcode
        }
      }
    }
  }
`

class Main extends React.Component{
  render(){
    const { onAddClick } = this.props
    return(
      <Query query={GET_DOG}>
        {({loading, error, data}) => {
          if (loading) return <div>Loading</div>
          if (error) return <div>Error :</div>

          return (
            <div className="App">
              <header className="App-header">
                <h1 className="App-title">菜单</h1>
              </header>
              <div className="products">
                {data.store.listings.map(listing => (
                  <Product key={listing.id} productData={listing} onAddClick={onAddClick}/>
                ))}
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAddClick: (listing) => dispatch(addToCart(listing))
  }
}
function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
