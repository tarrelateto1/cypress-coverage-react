import React, {Component} from 'react';
import {connect} from "react-redux";
import {_setValue} from "../stores/actions/add";
import {bindActionCreators} from "redux";
import {Layout} from 'antd';
import SiderComponent from "../components/SiderComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Main from "./contents/Main"

class App extends Component {

    constructor() {
        super()
        this.state = {
            result: null,
        }
        this.elements = {}
        this.onPlus = this.onPlus.bind(this);
        this.onSubtract = this.onSubtract.bind(this);
        this.onMultiple = this.onMultiple.bind(this);
        this.onDivide = this.onDivide.bind(this);
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <SiderComponent/>
                <Layout className="site-layout">
                    <HeaderComponent/>
                    <Main/>
                    <FooterComponent/>
                </Layout>
            </Layout>
        );
    }


    onPlus() {
        const firstValue = parseInt(this.elements.firstValue.value, 10)
        const secondValue = parseInt(this.elements.secondValue.value, 10)
        const resultPlus = this.plus(firstValue, secondValue)
        this.setState({
            result: resultPlus,
        });
        this.props._setValue(resultPlus)
    }

    plus(firstValue, secondValue) {
        return firstValue + secondValue
    }

    onSubtract() {
        const firstValue = parseInt(this.elements.firstValue.value, 10)
        const secondValue = parseInt(this.elements.secondValue.value, 10)
        const resultSubtract = this.subtract(firstValue, secondValue)
        this.setState({
            result: resultSubtract,
        });
        this.props._setValue(resultSubtract)

    }

    subtract(firstValue, secondValue) {
        return firstValue - secondValue
    }

    onMultiple() {
        const firstValue = parseInt(this.elements.firstValue.value, 10)
        const secondValue = parseInt(this.elements.secondValue.value, 10)
        const resultMultiple = this.multiple(firstValue, secondValue)
        this.setState({
            result: resultMultiple,
        });
        this.props._setValue(resultMultiple)
    }

    multiple(firstValue, secondValue) {
        return firstValue * secondValue
    }

    onDivide() {
        const firstValue = parseInt(this.elements.firstValue.value, 10)
        const secondValue = parseInt(this.elements.secondValue.value, 10)
        const resultDivide = this.divide(firstValue, secondValue)
        this.setState({
            result: resultDivide,
        });
        this.props._setValue(resultDivide)

    }

    divide(firstValue, secondValue) {
        if (secondValue === 0) {
            return 0;
        } else {
            return firstValue / secondValue
        }
    }

}

const mapStatetoProps = (state) => {
    return {state};
}
const mapDispatchtoProps = (dispatch) => bindActionCreators({
    _setValue
}, dispatch)
export default connect(mapStatetoProps, mapDispatchtoProps)(App);
