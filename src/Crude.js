import React, { Component } from 'react'


class Crud extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
            act: 0,
            index: '',
            datas: []

        }
    }



    fSubmit = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;

        if (this.state.act === 0) {
            let data = {
                name, address
            }
            datas.push(data);

        } else {
            let index = this.state.index;
            datas[index].name = name;
            datas[index].address = address;
        }


        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;

        this.setState({
            act: 1,
            index: i
        })

        this.refs.name.focus();

    }

    render() {
        let datas = this.state.datas;
        return (
            <div className="container" >
                <nav class="navbar navbar-expand-sm ">
                    <ul class="navbar-nav col-md" >


                    </ul>
                </nav><br />

                <div className="corpo" style={{ marginLeft: '270px' }}>
                    <form ref="myForm" className="myForm" >
                        <img style={{ height: "120px", marginLeft: "250px" }} src="https://pwa.taxireturn.com.br/webfiles/img/logo/taxireturn.png"></img>
                        <div className="form-row" >

                            <div className="col-md-5">
                                <input type="text" ref="name" className="form-control "  placeholder="Veiculo... " />
                            </div>

                            <div class="col-md-3">
                                <input  type="text" ref="address" className="form-control " placeholder="placa... "/>
                            </div>
                            <div>
                                <button onClick={(e) => this.fSubmit(e)} className className="myButton" className=" btn btn-primary" >Cadastrar

                                </button>
                                
                            </div>
                        </div><br />
                    </form>

                    <table className="table table-hover col-md-9">
                        <thead>
                            <tr>
                                <th><b>ID</b></th>
                                <th><b>VEICULO</b></th>
                                <th><b>PLACA</b></th>
                                <th><b>AÇÃO</b></th>
                                
                                
                            </tr>
                        </thead>

                        <tbody>
                            {datas.map((data, i) =>

                                <tr key={i} className="myList">
                                    <td><h6>{i + 1}</h6></td>
                                    <td><h6>{data.name}</h6></td>
                                    <td><h6>{data.address}</h6></td>
                                    <td><button type="button" style={{ marginLeft: '-50px' }} onClick={() => this.fEdit(i)} className="myButton btn btn-success btn-sm">Editar
                                    </button>
                                     <button type="button"  onClick={() => this.fRemove(i)} className="myButton btn btn-danger btn-sm " >
                                    Deleta
                                    </button></td>
                                    
                                    

                                </tr>


                            )}
                        </tbody>
                    </table>

                </div>
            </div>

        


        );
    }
}

export default Crud;