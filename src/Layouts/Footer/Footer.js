import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import './Footer.css'

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '' : '',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid className="footer" container spacing={2}>
                <Grid item xs={3}>
                    <Item>
                        <label>Location</label>
                    </Item>
                    <Item>
                        <div className='location_text_icon'>
                            <LocationOnOutlinedIcon/>
                            <p className="m-block-0">Road No. 5,Devera Konda Basti, Green Valley, Banjara Hills,Hyderabad, Telangana 500034</p>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <label>Hours</label>
                    </Item>
                    <Item>
                        <div>
                            <p className="m-block-0">Monday-Friday :- 9am to 10:30pm</p> <p className="m-block-0">Saturday-Sunday :- 7am to 2am</p>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <label>Contact</label>
                    </Item>
                    <Item>
                        <div>
                            <p className='m-block-0'>Pranitha(+91-7285944887)</p>
                    <p className='m-block-0'>Akshara(+91-9491345046)</p>
                    <p className='m-block-0'>Sathvik(+91-9866659465)</p>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item className="d-flex j-center item-center">
                        <CopyrightOutlinedIcon size={48}/>
                        <label className="icon_label">Burp-Guaranteed</label>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
