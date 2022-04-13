import React from "react";

//http://react.tips/checkboxes-in-react-16/
//const OPTIONS = ["One", "Two", "Three"];
//esse array deve vir da API 
//no nosso state={tipoPagamento:[]} na API body={paymentMethods:[]}

export default class CheckboxAddJob extends React.Component{

    state = {
        checkboxes: OPTIONS.reduce(
          (options, option) => ({
            ...options,
            [option]: false
          }),
          {}
        )
    };

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
    
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }));
    };

    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
        />
      );
    
    createCheckboxes = () => OPTIONS.map(this.createCheckbox);
    

    render(){

        return(

        <div className="container">
            <div className="row mt-5">
              <div className="col-sm-12">
                <form onSubmit={this.handleFormSubmit}>
                  {this.createCheckboxes()}
    
                    <div className="form-group mt-2">
                        <button
                        type="button"
                        className="btn btn-outline-primary mr-2"
                        onClick={this.selectAll}>

                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        )

    }

}