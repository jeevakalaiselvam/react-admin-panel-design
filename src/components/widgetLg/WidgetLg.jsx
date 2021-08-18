import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Data</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Roger Mathew</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Anna Sveltare</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$67.00</td>
          <td className='widgetLgStatus'>
            <Button type='Declined' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Jennifer Kolstan</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$435.00</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>John Hewlett</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$56.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>John Federer</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$232.00</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
      </table>
    </div>
  );
}
