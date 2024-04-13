import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

//burda başlıyor

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Giriş Uygulaması',
      theme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue)
          // primarySwatch: Colors.red,
          ),
      home: LoginPage(),
    );
  }
}

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login Form'),
      ),
      body: Center(
        child: LoginForm(),
      ),
    );
  }
}

class LoginForm extends StatefulWidget {
  @override
  _LoginFormState createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(20.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          TextField(
            controller: _usernameController,
            decoration: InputDecoration(
              labelText: 'Kullanıcı Adı',
            ),
          ),
          SizedBox(height: 20.0),
          TextField(
            controller: _passwordController,
            obscureText: true,
            decoration: InputDecoration(
              labelText: 'Şifre',
            ),
          ),
          SizedBox(height: 20.0),
          ElevatedButton(
            onPressed: () {
              // Burada giriş işlemlerini gerçekleştirin
              String username = _usernameController.text;
              String password = _passwordController.text;
              // Giriş bilgilerini kontrol etmek için istediğiniz işlemleri yapın
              // Örneğin, bir API çağrısı yapabilir veya yerel bir veritabanında kontrol edebilirsiniz
            },
            child: Text('Giriş Yap'),
          ),
        ],
      ),
    );
  }
}

//burda bitiyo