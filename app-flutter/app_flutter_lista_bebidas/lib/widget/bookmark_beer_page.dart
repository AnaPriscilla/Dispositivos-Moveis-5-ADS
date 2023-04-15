// ignore_for_file: prefer_const_constructors
import 'package:flutter/material.dart';

class BookmarkBeer extends StatefulWidget {
  const BookmarkBeer({Key? key}) : super(key: key);

  @override
  BookmarkBeerState createState() => BookmarkBeerState();
}

class BookmarkBeerState extends State<BookmarkBeer> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: Text("Lista de Bebidas"),
            backgroundColor: Colors.orange,
            iconTheme: IconThemeData(color: Color.fromARGB(255, 67, 168, 119)),
            //iconTheme: IconThemeData(color: Colors.cyan)
          ),
        body: Center(
          child: Text("Estou na página bookmark"),
        ),
        
        );
  }
}
