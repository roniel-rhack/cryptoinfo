import React, {Fragment} from 'react';
import NavBar from "../../components/NavBar";
import CryptoList from "../../components/CryptoList";
import PropTypes from "prop-types";

const Page = (props: any) => {

    return (
        <Fragment>
            <CryptoList/>
        </Fragment>
    );
};



export default Page