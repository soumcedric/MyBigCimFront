import React, { PureComponent } from 'react'
import '../../assets/css/custom.css';

const Basicard = ({page, title}) => {

    console.log(title);
    return (
        <div>
  <div classname="right-wrapper text-end">
    <ol classname="breadcrumbs">
      <li>
        <a href="index.html">
          <i classname="bx bx-home-alt">
          </i></a><i classname="bx bx-home-alt">
        </i></li><i classname="bx bx-home-alt">
        <li><span>{{page}}</span></li>
        <li><span>{{title}}</span></li>
      </i></ol><i classname="bx bx-home-alt">
      <a classname="sidebar-right-toggle" data-open="sidebar-right"><i classname="fas fa-chevron-left" /></a><i classname="fas fa-chevron-left">
      </i></i></div><i classname="bx bx-home-alt"><i classname="fas fa-chevron-left">
    </i></i></div>

    )
}