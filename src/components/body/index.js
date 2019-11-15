import React from 'react';
import { Container, Card, Grid, Paper, Tabs, Tab } from '@material-ui/core';

export function Body() {
    // should this logic be moved to redux?
    // lets make use of react state hook for now
    const [value, setValue] = React.useState(0);

    const handleChange = (_ev, newValue) => setValue(newValue);

    return <div className='body'>
        <Container maxWidth={false}>
            <Card className="card">
                <div onClick={() => console.log(123)}>this prints 123</div>                

                <Paper square>
                    this is part of the Paper
                    <input />
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Active 1" />
                        <Tab label="Disabled" disabled />
                        <Tab label="Active 2" />
                    </Tabs>
                </Paper>
            </Card>
        </Container>

        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper>
                    xs

                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Active 1" />
                        <Tab label="Disabled" disabled />
                        <Tab label="Active 2" />
                    </Tabs>
                </Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper>xs</Paper>
            </Grid>
        </Grid>
    </div>;
}