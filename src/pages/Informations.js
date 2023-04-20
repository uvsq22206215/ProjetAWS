import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Drawer from "../components/Drawer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../utils/firebase";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { AccountBox, Edit } from "@mui/icons-material";
import { UserAuth } from "../context/Usercontext";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset ": {
        borderColor: "#ff4838",
        borderRadius: 200,
      },
      "& input ": {
        borderColor: "#ff4838",
        borderRadius: 200,
      },
    },
    padding: 5,
  },
});
export default function Information() {
  const classes = useStyles();
  const { user, usr } = UserAuth();
  const [user1, setUser1] = useState(
    JSON.parse(sessionStorage.getItem("user-signin"))
  );
  const [userdetail, setUserdetail] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  // const [userdetail, setUserdetail] = useState(usr);
  // useEffect(() => {
  //   console.log(usr);
  //   setUserdetail(usr);
  // }, [usr]);

  return (
    <Card>
      <Container sx={{ backgroundColor: "#fff", p: 3 }}>
        <Typography variant="h3">
          <strong>Informations</strong>
        </Typography>
        <Formik
          initialValues={{
            username: userdetail?.username,
            email: user1?.email,
            password: "",
            password2: "",
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
          onSubmit={(values, actions) => {}}
        >
          {({
            setFieldValue,
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <div className="row mt-2">
                <div className="col-sm-6">
                  <div className="custom-input-group">
                    <Stack
                      justifyContent={"start"}
                      direction="row"
                      alignItems={"center"}
                      mb={2}
                    >
                      <AccountBox sx={{ color: "#ff4838" }}></AccountBox>
                      <Typography>Username:</Typography>
                    </Stack>
                  </div>
                  <TextField
                    error={Boolean(touched.username && errors.username)}
                    helperText={touched.username && errors.username}
                    className={classes.root}
                    fullWidth
                    value={values.username}
                    onChange={handleChange}
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                </div>

                <div className="col-sm-6">
                  <div className="custom-input-group">
                    <Stack
                      justifyContent={"start"}
                      direction="row"
                      alignItems={"center"}
                      mb={2}
                    >
                      <EmailIcon sx={{ color: "#ff4838" }}></EmailIcon>
                      <Typography>E-mail:</Typography>
                    </Stack>
                  </div>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    fullWidth
                    className={classes.root}
                    value={values.email}
                    onChange={handleChange}
                    type="text"
                    placeholder="E-mail"
                    name="email"
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-sm-6">
                    <div>
                      <Stack
                        justifyContent={"start"}
                        direction="row"
                        alignItems={"center"}
                        mb={2}
                      >
                        <KeyIcon sx={{ color: "#ff4838" }}></KeyIcon>
                        <Typography>Mot de passe:</Typography>
                      </Stack>
                    </div>
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                      fullWidth
                      className={classes.root}
                      value={values.password}
                      onChange={handleChange}
                      type="possword"
                      placeholder="Mot de passe"
                      name="password"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-sm-6">
                    <div>
                      <Stack
                        justifyContent={"start"}
                        direction="row"
                        alignItems={"center"}
                        mb={2}
                      >
                        <ThumbUpAltIcon
                          sx={{ color: "#ff4838" }}
                        ></ThumbUpAltIcon>
                        <Typography>Confirmation de mot de passe</Typography>
                      </Stack>
                    </div>
                    <TextField
                      error={Boolean(touched.password2 && errors.password2)}
                      helperText={touched.password2 && errors.password2}
                      fullWidth
                      className={classes.root}
                      value={values.password2}
                      onChange={handleChange}
                      type="password"
                      placeholder="Confirmation de mot de passe"
                      name="password2"
                    />
                  </div>
                </div>
              </div>
              <Stack
                justifyContent={"end"}
                direction="row"
                alignItems={"center"}
              >
                <Button
                  sx={{
                    bgcolor: "#ff4838",
                    ":hover": {
                      bgcolor: "red",
                    },
                  }}
                  startIcon={<Edit></Edit>}
                  variant="contained"
                  type="submit"
                >
                  Modifier
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Container>
    </Card>
  );
}
