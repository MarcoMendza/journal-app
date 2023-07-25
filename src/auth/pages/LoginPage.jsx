import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hook'
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth/'

export const LoginPage = () => {

    const { status } = useSelector( state => state.auth )

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'marco.mendza@outlook.com',
        password: '123456'
    });

    console.log( status )
    const isAuthenticating = useMemo( () => status === 'cheking', [status]);

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log( { email, password })
        dispatch( checkingAuthentication() )
    }

    const onGoogleSingIn = () => {
        console.log('onGoogleSingIn')
        dispatch( startGoogleSingIn() )
    }

  return (
    <AuthLayout title='Login'>
        <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@google.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                        >
                        </TextField>
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb:2, mt: 1 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled= { isAuthenticating }
                                type='submit' 
                                variant="contained"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled= { isAuthenticating }
                                onClick={ onGoogleSingIn } 
                                variant="contained" 
                                fullWidth
                            >
                                <Google/>
                                <Typography sx={{ ml:1 }}>Google</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link component={ RouterLink } color='inherit' to='/auth/register'>
                            Sing up
                        </Link>
                    </Grid>

                </Grid>
            </form>
    </AuthLayout>
  )
}
