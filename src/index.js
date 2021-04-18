import _ from "lodash";
import './style.scss';
import Nav from './nav/nav'


const body = document.getElementsByTagName('MAIN')[0]
const container = document.querySelector('.contain')


body.insertBefore(Nav().navTag ,container)
Nav().linkClick()
console.log(Nav().navSection)