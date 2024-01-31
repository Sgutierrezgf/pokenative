import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login } = useAuth();
  console.log(useAuth());

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("el usuario o el password son incorrectos");
      } else {
        login(userDetails);
        console.log("el usuario o el password son correctos");
        console.log(userDetails);
      }
    },
  });
  return (
    <View>
      <Text style={styles.title}>LoginForm</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Password de usuario"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button
        title="Entrar"
        onPress={formik.handleSubmit}
        style={styles.button}
      />
      {formik.errors.username ? (
        <Text style={styles.error}> {formik.errors.username} </Text>
      ) : (
        ""
      )}
      {formik.errors.password ? (
        <Text style={styles.error}> {formik.errors.password} </Text>
      ) : (
        ""
      )}
      {error ? <Text style={styles.error}> {error} </Text> : ""}
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("El password es obligatorio"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    margin: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    // marginTop: 20,
  },
});
