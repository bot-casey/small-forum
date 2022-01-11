import Post from './components/Post';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import TitleBar from './components/TitleBar';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div>
    <TitleBar/>
    <Grid
      container
      spacing={8}
      direction='row'
      alignItems='center'
      justifyContent='center'
    >
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <Grid item xs={10}> 
        <Post 
          src='https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg'
          title='Cute Puppies'
          author='u/whyIsThisInBash'
          flair='Lol'
          count='0'

        />
      </Grid>
      <Grid item xs={10}> 
      <Post 
        src='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMzQyOTk2OTY3ODkyODQ0/gettyimages-490703338.jpg'
        title='Some Kobe Scandal'
        author='u/iAmOutraged'
        flair='Toxic'
        count='12000'
      />
      </Grid>
      <Grid item xs={10}>
      <Post 
        src='https://upload.wikimedia.org/wikipedia/commons/1/1c/Three-body_Problem_Animation_with_COM.gif'
        title='A Centuries-Old Physics Mystery? Solved'
        author='u/funnySciFiRefrence'
        count='500'
      />
      </Grid>
      <Grid item xs={10}>
      <Post 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/330px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg'
        title='Corgi Named Top Dog'
        author='u/dogLover123'
        flair='Eye bleach'
        count='100'
      />
      </Grid>
    </ThemeProvider>
    </Grid>
    </div>
  );
}

export default App;
