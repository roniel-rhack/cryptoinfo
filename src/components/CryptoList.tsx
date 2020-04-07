import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CryptoCard from "./CryptoCard";
import {Grid} from "@material-ui/core";
import {getCryptoInfoAction} from "../redux/actions/getCryptoInfo";
import {connect} from "react-redux";

const CryptoList = (props: any) => {
    useEffect(() => {
        props.getCryptoInfoAction();
    }, []);
    const {data} = props.data;
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    {
                        data.map((value: any) => {
                            return (
                                <Grid item xs={4}>
                                    <CryptoCard
                                     data={value}
                                    />
                                </Grid>
                            )
                        })
                    }


                </Grid>
            </Container>
        </React.Fragment>
    );
};

const mapDispatchToProps = {
    getCryptoInfoAction
};

const mapStateToProps = (state: any) => {
    return {
        data: state.CryptoInfo,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList)