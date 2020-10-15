import React, { useState, useEffect } from "react";

const SideBar = () => (
  <div className="navbar__wrapper">
    <div className="navbar__group">
      <div className="navbar__header">Discover</div>
      <div className="navbar__items">
        <div>
          <span class="material-icons">flash_on</span> Latest
        </div>
        <div>
          <span class="material-icons">menu_book</span> New York Times Top 100
        </div>
        <div>
          <span class="material-icons">directions_car</span> Oprah's Book Club
        </div>
        <div>
          <span class="material-icons">trending_up</span> Trending
        </div>
      </div>
    </div>
    <div className="navbar__divider"> </div>
    <div className="navbar__group">
      <div className="navbar__header">Genres</div>
      <div className="navbar__items">
        <div>
          <span class="material-icons">star_half</span> Fantasy
        </div>
        <div>
          <span class="material-icons">two_wheeler</span> Thriller
        </div>
        <div>
          <span class="material-icons">miscellaneous_services</span> Science
          Fiction
        </div>
        <div>
          <span class="material-icons">fingerprint</span> Mystery
        </div>
        <div>
          <span class="material-icons">sports_basketball</span> Sports
        </div>
        <div>
          <span class="material-icons">elderly</span> Classics
        </div>
        <div>
          <span class="material-icons">business_center</span> Business
        </div>
        <div>
          <span class="material-icons">favorite_border</span> Romance
        </div>
      </div>
    </div>
  </div>
);

export default SideBar;
