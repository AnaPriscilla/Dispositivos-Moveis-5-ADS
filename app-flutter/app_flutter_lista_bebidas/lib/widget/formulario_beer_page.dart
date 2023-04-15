// ignore_for_file: prefer_const_constructors
import 'package:flutter/material.dart';

class FormularioBeer extends StatefulWidget {
  const FormularioBeer({Key? key}) : super(key: key);

  @override
  FormularioBeerState createState() => FormularioBeerState();
}

class FormularioBeerState extends State<FormularioBeer> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: Text("Adicionar sua bebida"),
            backgroundColor: Colors.orange,
            iconTheme: IconThemeData(color: Colors.indigoAccent),
            //iconTheme: IconThemeData(color: Colors.cyan)
          ),
        body: Center(
          child: Text("Estou na página formulário"),
        ),
        
        );
  }
}
