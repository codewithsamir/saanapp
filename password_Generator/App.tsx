import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Formik} from 'formik';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be min of 4 characters')
    .max(16, 'should be max of 16 characters')
    .required('Length is required'),
});
export default function App() {
  const [first, setfirst] = useState(0);
  const [password, setpassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenrated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [number, setnumber] = useState(false);
  const [symbol, setsymbol] = useState(false);

  const generatedPasswordSting = (passwordLength: number) => {
    let characterlist = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()_+';
    const numberchars = '1234567890';
    if (uppercase) {
      characterlist += upperCaseChars;
    }
    if (lowerCase) {
      characterlist += lowerCaseChars;
    }
    if (number) {
      characterlist += numberchars;
    }
    if (symbol) {
      characterlist += specialChars;
    }
    const passwordresult = createPassword(characterlist, passwordLength);
    setpassword(passwordresult);
    setIsPasswordGenrated(true);
  };
  const createPassword = (character: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterindex = Math.round(Math.random() * character.length);
      result += character.charAt(characterindex);
    }
    return result;
  };
  const resetPasswordState = () => {
    setpassword('');
    setIsPasswordGenrated(false);
    setUppercase(false);
    setLowerCase(true);
    setnumber(false);
    setsymbol(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>password Generator</Text>

          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              console.log(values);
              generatedPasswordSting(Number(values.passwordLength));
            }}>
            {({
              values,

              errors,

              touched,
              isValid,
              handleChange,

              handleSubmit,

              handleReset,

              /* and other goodies */
            }) => (
              <View style={styles.king}>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>password Length</Text>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="ex. 8"
                    keyboardType="numeric"
                  />
               
                </View>
                {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.errorText}>
                      {errors.passwordLength}
                    </Text>
                  )}
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <BouncyCheckbox
                    style={styles.ball}
                    disableBuiltInState
                    inChecked={lowerCase}
                    onPress={() => setLowerCase(lowerCase)}
                    fillColor="#F4A460"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include upperCase</Text>
                  <BouncyCheckbox
                    style={styles.ball}
                    disableBuiltInState
                    inChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="#FA8072"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include number</Text>
                  <BouncyCheckbox
                    style={styles.ball2}
                    disableBuiltInState
                    inChecked={number}
                    onPress={() => setnumber(!number)}
                    fillColor="#29ab87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include symbol</Text>
                  <BouncyCheckbox
                    style={styles.ball2}
                    disableBuiltInState
                    inChecked={symbol}
                    onPress={() => setsymbol(!symbol)}
                    fillColor="#93ef12"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}>
                    <Text style={styles.button2}>generate password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text style={styles.button2}>reset</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>

        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long press to copy</Text>
            <Text style={styles.subTitle}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  inputWrapper: {
    marginBottom: 15,
    flex: 1,
    alignItems: 'center',

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
  },
  primaryBtn: {
    // width: 120,
    // padding: 10,
    // borderRadius: 8,
    // marginHorizontal: 8,
    backgroundColor: '#F4A460',

    borderRadius: 15,
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  button1: {
    backgroundColor: '#F4A460',
    padding: 8,
    borderRadius: 15,
    color: '#483D8B',
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: '#483D8B',
    padding: 8,
    paddingHorizontal: 22,
    borderRadius: 15,
    color: '#F4A460',
    fontWeight: 'bold',
  },
  king: {
    borderWidth: 5,
    borderColor: '#483D8B',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  ball: {
    marginLeft: 150,
  },
  ball2: {
    marginLeft: 172,
  },
});
