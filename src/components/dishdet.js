import React, { Component } from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";

class Dishdetail extends Component {

 

    formatDate({ date }) {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }

    //渲染点击Card
    renderDish(dish) {
        // console.log(dish)
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComments(comments){
        // console.log(comments)
        if (comments != null) {

           const list = comments.map((comments) => {
               const date = comments.date ;

              return(
                <div>
                
                <li key={comments.id} className="list-unstyled mt-3 mb-3">
                    <p>{comments.comment}</p>
                    <div className="row">
                        <p> -- {comments.author}  </p>
                       <p> {new Intl.DateTimeFormat('en-US',{year: 'numeric' ,  month: 'short', day:'2-digit'}).format(new Date(Date.parse(comments.date)))} </p>
                    </div>
                </li>
                </div> 
              ); 

              
           }); 

           return(
            <div className="ml-3">
                <h3>Comments</h3>
                {list}
            </div>
        )
           
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){

        // console.log(this.props.dishSelect)
        const {dishSelect} = this.props;
        console.log(dishSelect);

        return dishSelect?(
            <div class="container">
                <div className="row col-12" >
                    <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dishSelect)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dishSelect.comments)}
                    </div>
                </div>
                </div>
        ):(
            <div></div>
        )
    }

}

export default Dishdetail ;