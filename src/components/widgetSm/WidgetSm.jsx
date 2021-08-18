import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            src='https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>John Hewlett</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>John Federer</span>
            <span className='widgetSmUserTitle'>Concept Artist</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Jennifer Kolstan</span>
            <span className='widgetSmUserTitle'>Project Manager</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Roger Mathew</span>
            <span className='widgetSmUserTitle'>Sound Designer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Sveltare</span>
            <span className='widgetSmUserTitle'>Product Manager</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Sveltare</span>
            <span className='widgetSmUserTitle'></span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
