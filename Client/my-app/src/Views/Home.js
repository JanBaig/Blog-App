import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/styles.css'
import BlogItem from './BlogItem'

export default function App() {
  
  return (
    <div>This is the home page</div>
  );
}


// Goals
// Seperate 'Create Blog' with Blog Display Lists
// Display each blog in a div (With borders) and line them up on top of each other to the right
// Load initial data from the DB into the blogsArary to render at first
// Add options to edit and remove existing blogs (All re-rendered correctly)