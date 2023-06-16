import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.iphoneXxs8, styles.iphoneXxs8Position]}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={styles.emailParent}>
          <View style={[styles.email, styles.passPosition]}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
            <Text style={[styles.emailAddress, styles.passwordTypo]}>
              Email Address
            </Text>
          </View>
          <View style={[styles.pass, styles.passPosition]}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
            <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
          </View>
          <View style={[styles.loginButton, styles.passPosition]}>
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group1.png")}
            />
            <Text style={[styles.login, styles.passwordTypo]}>LOGIN</Text>
          </View>
        </View>
        <Text style={[styles.forgotPassword, styles.passwordTypo]}>
          Forgot Password?
        </Text>
        <Text style={[styles.dontHaveAnContainer, styles.passwordTypo]}>
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.registerNow}>Register now</Text>
        </Text>
      </View>
      <Image
        style={[styles.socialLoginIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/social-login.png")}
      />
      <Image
        style={[styles.ocssLogoPng1Icon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/ocsslogopng-1.png")}
      />
      <Text style={styles.onBoardingMade}>ON BOARDING MADE EASY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneXxs8Position: {
    left: "0%",
    right: "0%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    width: "100%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  passPosition: {
    height: "26.32%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  passwordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    right: "0%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon: {
    height: "148%",
    width: "108%",
    top: "-18%",
    right: "-4%",
    bottom: "-30%",
    left: "-4%",
  },
  emailAddress: {
    left: "8.29%",
    color: Color.white,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    top: "29.6%",
  },
  email: {
    bottom: "73.68%",
    top: "0%",
    height: "26.32%",
  },
  password: {
    left: "8.23%",
    color: Color.white,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    top: "29.6%",
  },
  pass: {
    top: "36.84%",
    bottom: "36.84%",
  },
  groupIcon2: {
    height: "124%",
    width: "104%",
    top: "-6%",
    right: "-2%",
    bottom: "-18%",
    left: "-2%",
  },
  login: {
    top: "31.6%",
    left: "42.32%",
    color: "#3f82e6",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
  },
  loginButton: {
    top: "73.68%",
    bottom: "0%",
    height: "26.32%",
  },
  emailParent: {
    height: "23.4%",
    width: "80%",
    top: "44.95%",
    right: "9.87%",
    bottom: "31.65%",
    left: "10.13%",
    position: "absolute",
  },
  forgotPassword: {
    top: "70.94%",
    left: "60.27%",
    fontSize: 14,
    color: Color.white,
  },
  dontHaveAn: {
    color: Color.white,
  },
  text: {
    color: "#1a1a1a",
  },
  registerNow: {
    textDecoration: "underline",
    color: Color.white,
  },
  dontHaveAnContainer: {
    top: "91.38%",
    left: "24.07%",
    fontSize: 12,
  },
  iphoneXxs8: {
    position: "absolute",
  },
  socialLoginIcon: {
    height: "6.16%",
    width: "53.33%",
    top: "80.3%",
    right: "23.2%",
    bottom: "13.55%",
    left: "23.47%",
  },
  ocssLogoPng1Icon: {
    height: "17%",
    width: "73.87%",
    top: "2.34%",
    right: "14.4%",
    bottom: "80.67%",
    left: "11.73%",
  },
  onBoardingMade: {
    marginLeft: -135.5,
    top: "22.54%",
    left: "50%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  frame: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame;
