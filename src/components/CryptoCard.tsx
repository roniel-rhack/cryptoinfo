import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "@material-ui/core/Icon";

const CryptoCard = ({data}: any) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return(
        <Card style={{ maxWidth: '250px' }}>
            <CardHeader
                avatar={
                    <img alt={data.name} style={{ maxWidth:'50px', maxHeight:'50px', width: '50px', height: '50px' }} src={data.logo_url} />
                }
                title={data.name}
                subheader={`Symbol: ${data.symbol}`}
            />
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {`Rank: ${data.rank}`}
                </Typography>
                <Typography variant="h5" component="h2">
                    {`Price: ${formatter.format(data.price)}`}
                </Typography>
                <Typography color="textSecondary">
                    USD
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
};

export default CryptoCard