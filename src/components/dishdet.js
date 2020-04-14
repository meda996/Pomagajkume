import React from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";





function RenderDish({pedo}) {
        
    if (pedo != null) {
        
            return(
                <Card>
                    <CardImg width="100%" src={pedo.image} alt={pedo.name} />
                    <CardBody>
                        <CardTitle>{pedo.name}</CardTitle>
                        <CardText>{pedo.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            
            return(
                <div> </div>
            )
        }
    }

 function RenderComments({comments}) {

            if (comments != null) {

           const list = comments.map((comments) => {
               

              return(
                <div>
                
                <li key={comments.id} className="list-unstyled mt-3 mb-3">
                    <p>{comments.comment}</p>
                    <div className="row">
                        <p> -- {comments.author}  </p>
                       <p> 
                           {new Intl.DateTimeFormat
                           ('en-US',{year: 'numeric' ,  month: 'short', day:'2-digit'}
                           ).format(new Date(Date.parse(comments.date)))} </p>
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

const DishDetail = (props) => {

 
return (
        <div class="container">
            <div className="row col-12" >
                <div className="col-12 col-md-5 m-1">
                <RenderDish pedo={props.dish} /> 
                </div>
                <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
    )
       
}

    



export default DishDetail ;