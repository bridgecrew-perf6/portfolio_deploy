import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEA9kfG7E47xgAAAYGw1aOAO2xCYQKuPhdFjkV1Z6zf7FcgFyfXMuygX485Fg7PdRWTPgobCVxo3KGbCCbg2cg80R3887oqvmiMHbLEQSrwbxwZkJkLdOTAW5h7JfBc2uC3cTA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fwasim-zaffar-93784b214%2F' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/erwasim1' target="_blank"><BsGithub/></a>
        <a href='https://leetcode.com/wasim_zaffar/' target="_blank"><SiLeetcode/></a>
        <a href='https://auth.geeksforgeeks.org/user/wasimzaffar58' targrt="_blank"><SiGeeksforgeeks/></a>

    </div>
  )
}

export default HeaderSocial