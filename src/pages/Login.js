import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { auth, database } from "../utils/firebase";
import { useNavigate } from "react-router";
import { collection, addDoc } from "firebase/firestore";
import '../assets/css/Login.css'
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
  Stack,
  Link,
  Hidden,
  Tabs,
  Tab,
  Collapse,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/img/l.jpg";
import logo from "../assets/img/AWS Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme } from "@mui/material/styles";
import { positions } from "@mui/system";
import { alpha, styled } from "@mui/material/styles";
import { render } from "@testing-library/react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/Mail";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { blue, pink } from "@mui/material/colors";
import "../assets/css/Login.css";
import { UserAuth } from "../context/Usercontext";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Uselogin() {
  let history = useNavigate();
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
        borderRadius: "10vh",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ff5b00ba",
      },
    },
  });
  const [openusername, setOpenusername] = React.useState(false);
  const { checkUsernameExists } = UserAuth();
  const [login, setLogin] = React.useState(true);
  const handleChange1 = (login) => {
    login ? setValue(0) : setValue(1);
  };
  const [value, setValue] = React.useState(0);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showPassword1, setShowPassword1] = React.useState(false);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    handleChange1(login);
  }, [login]);

  const [openRegister, setOpenRegister] = React.useState(false);
  const [openlog, setOpenLog] = React.useState(false);
  const [user, setUser] = React.useState({});

  const register = async (values) => {
    try {
      checkUsernameExists(values.username).then((result) => {
        if (!result) {
          const user = createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          ).then((userCrenditial) => {
            addDoc(collection(database, "users"), {
              id: userCrenditial.user.uid,
              username: values.username,
              gender: values.picked,
            });
          });
          setLogin(true);
          setOpenRegister(true);
        } else {
          setOpenusername(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const log = async (values) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.username,
        values.password
      );
      history("/"); //redirection vers cette page
    } catch (error) {
      setOpenLog(true);
      console.log(error);
    }
  };

  return (
    <Paper
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100vh",
        borderRadius: "none",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar mt={-1} style={{ height: "5vh" }}>
          <a href="/" className="logo-img">
            <img
            src={logo}
            width={220}
            height={220}
            style={{ marginTop: "2vh" }}
          />
          </a>
          
          {/* <Grid container justifyContent="flex-end">
            <IconButton sx={{ color: "#ff5b00ba", right: "right" }}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Grid> */}
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container justifyContent="flex-end" id="login-grid">
          <TabPanel value={value} index={0}>
            <Grid>
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
                  height: "78vh",
                }}
              >
                <Grid align="center" sx={{ mt: 3 }}>
                  <Avatar style={avatarStyle}>
                    <LockIcon></LockIcon>
                  </Avatar>
                  <h2>CONNEXION</h2>
                  <Typography
                    variant="subtitle1"
                    style={{ paddingBottom: "3vh" }}
                  >
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
                  onSubmit={(values) => {
                    log(values);
                  }}
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
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                          }}
                        >
                          <Divider />

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
                                label="E-mail"
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
                          <Grid item xs={12}>
                            <Typography>
                              {" "}
                              Vous avez déja un compte ?
                              <Link href="#" onClick={() => setLogin(false)}>
                                {" "}
                                S'inscrire
                              </Link>
                            </Typography>
                          </Grid>
                        </Box>
                      </Container>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid item xs={12} className="">
              <Card
                sx={{
                  mt: 5,
                  backgroundColor: "background.default",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "center",
                  boxShadow: 10,
                  borderRadius: "3vh",
                }}
                elevation={20}
                style={{
                  width: "60vh",
                  height: "78vh",
                }}
              >
                <Grid align="center" sx={{ mt: 1 }}>
                  <Avatar style={avatarStyle}>
                    <AddCircleIcon></AddCircleIcon>
                  </Avatar>
                  <h2>Inscription</h2>
                  <Typography variant="caption">
                    Veuillez remplir ce formulaire pour créer un compte
                  </Typography>
                </Grid>
                <Formik
                  initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    password2: "",
                    picked: "male",
                  }}
                  validationSchema={Yup.object().shape({
                    username: Yup.string()
                      .max(255)
                      .required(" Le nom d'utilisateur est obligatoire"),
                    email: Yup.string()
                      .email("Introduisez un e-mail valide")
                      .max(255)
                      .required("Email est obligatoire"),
                    password: Yup.string()
                      .required("Le mot de passe est obligatoire")
                      .min(
                        8,
                        "Veullez introduire un mot de passe supériére à 8 caractéres"
                      ),

                    password2: Yup.string().oneOf(
                      [Yup.ref("password"), null],
                      "Les mots de passes se ne correspondent pas"
                    ),
                  })}
                  onSubmit={(values) => {
                    register(values);
                  }}
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
                        <Box
                          sx={{
                            mb: 10,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                          }}
                        >
                          <Grid container>
                            <Grid item xs={12}>
                              <CssTextField
                                fullWidth
                                size="small"
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
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <AccountCircle />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <CssTextField
                                fullWidth
                                size="small"
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                                onBlur={handleBlur}
                                margin="normal"
                                name="email"
                                type="email"
                                label="E-mail"
                                value={values.email}
                                onChange={handleChange}
                                id="email"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <MailIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <CssTextField
                                fullWidth
                                size="small"
                                error={Boolean(
                                  touched.password && errors.password
                                )}
                                helperText={touched.password && errors.password}
                                onBlur={handleBlur}
                                margin="normal"
                                name="password"
                                label="Mot de passe"
                                type={showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleChange}
                                id="password"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {showPassword ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <CssTextField
                                fullWidth
                                size="small"
                                error={Boolean(
                                  touched.password2 && errors.password2
                                )}
                                helperText={
                                  touched.password2 && errors.password2
                                }
                                onBlur={handleBlur}
                                margin="normal"
                                name="password2"
                                type={showPassword1 ? "text" : "password"}
                                label="Confirmation de mot de passe"
                                value={values.password2}
                                onChange={handleChange}
                                id="password2"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword1}
                                        onMouseDown={handleMouseDownPassword1}
                                        edge="end"
                                      >
                                        {showPassword1 ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormControl sx={{ marginLeft: 1 }}>
                                <FormLabel id="demo-row-radio-buttons-group-label">
                                  Gender
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="picked"
                                  value={values.picked}
                                  onChange={(event) => {
                                    setFieldValue(
                                      "picked",
                                      event.currentTarget.value
                                    );
                                  }}
                                >
                                  <FormControlLabel
                                    value="female"
                                    control={
                                      <Radio
                                        sx={{
                                          color: pink[800],
                                          "&.Mui-checked": {
                                            color: pink[600],
                                          },
                                        }}
                                      />
                                    }
                                    label="Female"
                                  />
                                  <FormControlLabel
                                    value="male"
                                    control={
                                      <Radio
                                        sx={{
                                          color: blue[800],
                                          "&.Mui-checked": {
                                            color: blue[600],
                                          },
                                        }}
                                      />
                                    }
                                    label="Male"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Button
                            type="sumbit"
                            fullWidth
                            variant="contained"
                            sx={{
                              mt: 3,
                              mb: 2,
                              borderRadius: "20vh",
                              background: "#f58220",
                            }}
                          >
                            Creer
                          </Button>
                        </Box>
                      </Container>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Grid>
          </TabPanel>
        </Grid>
        <Collapse
          in={openRegister}
          style={{
            position: "absolute",
            left: "50%",
            top: "5%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Alert
            onClose={() => {
              setOpenRegister(false);
            }}
          >
            Compte crée avec succes
          </Alert>
        </Collapse>
        <Collapse
          in={openlog}
          style={{
            width: "100vh",
            position: "absolute",
            left: "50%",
            top: "5%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Alert
            severity="error"
            onClose={() => {
              setOpenLog(false);
            }}
          >
            Email ou mot de passe incorrect
          </Alert>
        </Collapse>
        <Collapse
          in={openusername}
          style={{
            width: "100vh",
            position: "absolute",
            left: "50%",
            top: "5%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Alert
            severity="error"
            onClose={() => {
              setOpenusername(false);
            }}
          >
            Username existe déja
          </Alert>
        </Collapse>
      </Container>
    </Paper>
  );
}
