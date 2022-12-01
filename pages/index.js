import { AppBar, Card, CardContent, CardMedia, Grid, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { DetailDialog } from '../components/molecules';

export default function Home(props) {
  const [openDetail, setOpenDetail] = useState(true);
  return (
    <div>
      <DetailDialog
        open={openDetail}
        scroll='paper'
        onClose={() => setOpenDetail(!openDetail)}
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='p'>
              Movie List
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container direction="row" alignItems="center" spacing={2}
        sx={{
          display: `grid`,
          gridTemplateColumns: `repeat(5, 1fr)`,
          columnGap: 2,
          rowGap: 2,
          maxWidth: '1000px',
          margin: '2vw auto'
        }}
      >
        {props?.results?.map((data) => {
          return (
            <Card key={data?.id} sx={{ height: '100%' }}>
              <CardMedia
                component='img'
                height='200'
                image={`https://image.tmdb.org/t/p/w200${data?.poster_path}`}
                alt={data?.title}
              />
              <CardContent>
                <Typography variant='p' gutterBottom>
                  {data?.title}
                </Typography>
              </CardContent>
            </Card>
          )
        })}
      </Grid>
    </div>
  )
}

export async function getStaticProps() {
  const hitApi = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=5555a26c0571b1151d2f184b95759ec4&language=id-ID&page=1');
  const resp = await hitApi.json();
  return { props: resp }
}
