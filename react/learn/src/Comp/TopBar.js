import React , {Component} from "react";

class TopBar extends Component{ 
    render(){
        const style={
            nv:{
                overflow: "hidden",
                '& a':{
                backgroundColor: "black",
                },
                position: "fixed",
                top: "0",
                width: "100%",
                '& a:hover':{
                    backgroundColor:"purple",
                },
            }
        };
        return (
            <div>
                <div className="nv" style={style}>
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        );
    }
}
export default TopBar;