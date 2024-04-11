import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <hr />
        <ul>
            <a href=''>browse job</a>
            <a href=''>browse companies</a>
            <a href=''>countries</a>
            <a href=''>about</a>
            <a href=''>help center</a>
        </ul>
        <select name="languages" >
            <option value="English">English</option>
            <option value="Français">Français</option>
            <option value="العربية">العربية</option>
        </select>
    </div>
  )
}
