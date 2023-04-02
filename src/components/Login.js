import React from "react";
import {
  Container,
  TextField,
  CssBaseline,
  Divider,
  AppBar,
  Button,
  Typography,
  Toolbar,
  Grid,
  Paper,
  Box,
  IconButton,
  Avatar,
  Card,
  CssTextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LockIcon from "@mui/icons-material/Lock";
import image from "./brooke-lark-08bOYnH_r_E-unsplash.jpg";
import logo from "./AWS Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { positions } from "@mui/system";
import { alpha, styled } from "@mui/material/styles";
export default function login() {
  const avatarStyle = { backgroundColor: "#ff5b00ba" };
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#ff5b00ba",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#707070",
      borderRadius: "50vh",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "50vh",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ff5b00ba",
      },
    },
  });
  return (
    <Paper
      container
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar mt={-1} style={{ height: "5vh" }}>
          <img
            src={logo}
            width={220}
            height={220}
            style={{ marginTop: "2vh" }}
          />
          <Grid container justifyContent="flex-end">
            <IconButton sx={{ color: "white", right: "right" }}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container direction="row" spacing={2}>
        <Grid item sm={6} md={8} xs={12}>
          <Card
            sx={{
              backgroundColor: "background.default",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              boxShadow: 10,
              borderRadius: "3vh",
            }}
            elevation={20}
            style={{
              width: "50vh",
              height: "70vh",
              marginLeft: "120vh",
              padding: 10,
            }}
          >
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockIcon></LockIcon>
              </Avatar>
              <h3>CONNEXION</h3>
              <Typography variant="subtitle1" style={{ paddingBottom: "3vh" }}>
                Utiliser votre compte
                <br />
                The Recipe Rendez-vous
              </Typography>
            </Grid>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                username: Yup.string()
                  .max(255)
                  .required("username est obligatoire"),
                password: Yup.string()
                  .max(255)
                  .required("password est obligatoire"),
              })}
              onSubmit={(values) => {}}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                touched,
                values,
                setFieldValue,
              }) => (
                <Form>
                  <Container>
                    <CssBaseline />
                    <Box
                      sx={{
                        marginTop: 2,

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                      }}
                    >
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Grid container>
                          <Grid item xs={12}>
                            <CssTextField
                              // className={styles.textfield}
                              fullWidth
                              error={Boolean(
                                touched.username && errors.username
                              )}
                              helperText={touched.username && errors.username}
                              onBlur={handleBlur}
                              margin="normal"
                              label="Nom d'utilisateur"
                              id="username"
                              name="username"
                              value={values.username}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <CssTextField
                              fullWidth
                              error={Boolean(
                                touched.password && errors.password
                              )}
                              helperText={touched.password && errors.password}
                              onBlur={handleBlur}
                              margin="normal"
                              name="password"
                              type="password"
                              label="Mot de passe"
                              value={values.password}
                              onChange={handleChange}
                              id="password"
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{
                            mt: 3,
                            mb: 2,
                            borderRadius: "20vh",
                            background: "#f58220",
                          }}
                        >
                          Login
                        </Button>
                      </Box>
                    </Box>
                  </Container>
                </Form>
              )}
            </Formik>
          </Card>
        </Grid>
        <Grid item sm={6} md={8} xs={12}>
          <h2>ouuuu</h2>
        </Grid>
      </Grid>
    </Paper>
  );
}
