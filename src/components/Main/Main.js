import {Body, SmileTopLeft, SmileCenterYellow, SmileCenterPink, Moon } from './Main.styled';
import Title from '../Title';
import Form from '../Form';

const Main = () => {
    return <Body>
        <SmileTopLeft/>
        <SmileCenterYellow/>
        <SmileCenterPink />
        <Moon/>
        <Title title="Reach out to us!"/>
        <Form/>
        </Body>
}

export default Main;