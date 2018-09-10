import React , { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../UI/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }

    porcentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
            
        }, 30)

    }

        

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                    <div className="discount_porcentage">
                        <span> {this.state.discountStart}%</span>
                        <span> Off</span>
                    </div>
                    </Fade>
                    <Slide right>
                    <div className="discount_description">
                        <h3> Purchase tickets before 27th June</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                        <MyButton
                            bck="#faa800"
                            color="#ffffff"
                            text="More"
                            link="https://www.google.com.tw"
                        />
                    </div>
                    </Slide>
                    
                </div>
                
            </div>
        );
    }
}

export default Discount;