'use client';

import AuthContainer from "@/app/components/BlockAuth/AuthContainer";
import SubmitButton from "@/app/components/Buttons/SubmitButton";
import style from "./setusername.module.css"
import BubbleBackground from "@/app/components/EffectComponents/BubbleContainer";


export default function SetUsername() {

    return (
        <div>
            <BubbleBackground />
            <AuthContainer>
                <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100" fill="green" className={style.creeper}>
                    <polygon points="37.019,70.467 29.104,65.902 29.104,80.182 37.019,84.745 "/>
                    <polygon points="46.933,80.471 46.933,90.474 54.835,95.037 54.835,80.759 46.933,76.195 "/>
                    <polygon points="47.432,75.329 55.335,79.893 63.249,75.329 55.335,70.755 "/>
                    <path d="M63.749,40.178l-12.604,7.288c-0.001,0-0.002,0-0.002,0c-0.008,0.004-0.018,0.004-0.025,0.008  c-0.067,0.034-0.141,0.058-0.222,0.058c-0.001,0-0.001,0-0.001,0c-0.001,0-0.001,0-0.001,0s0,0-0.001,0c0,0,0,0-0.001,0  c-0.081,0-0.154-0.024-0.222-0.058c-0.008-0.004-0.018-0.004-0.025-0.008c0,0-0.001,0-0.002,0l-3.711-2.147v29.144l8.15-4.717  c0.001-0.001,0.001-0.002,0.002-0.002l8.664-4.996V40.178z" />
                    <polygon points="45.933,44.742 38.019,40.178 38.019,59.885 38.019,69.889 45.933,74.463 "/>
                    <polygon points="56.335,70.178 64.249,74.752 72.163,70.178 64.249,65.613 "/>
                    <polygon points="38.019,84.745 45.933,80.182 45.933,75.618 38.019,71.044 "/>
                    <polygon points="63.749,90.473 63.749,76.195 55.835,80.76 55.835,95.037 "/>
                    <polygon points="51.395,46.167 63.996,38.881 63.998,38.879 68.201,36.443 68.201,17.024 51.395,26.738 "/>
                    <polygon points="67.701,16.158 50.895,6.454 34.067,16.158 50.895,25.872 "/>
                    <polygon points="37.019,60.752 29.604,65.036 37.019,69.312 "/>
                    <polygon points="37.77,38.88 46.683,44.02 46.683,44.02 50.395,46.167 50.395,26.738 33.566,17.024 33.566,36.443 37.77,38.879 "/>
                    <polygon points="64.749,89.896 72.663,85.322 72.663,71.044 64.749,75.618 "/>
                </svg>
                <h1 className={style.title}>Завершите регистрацию</h1>
                <p className={style.subtitle}>Укажите ваш никнейм на котором вы будете играть на нашем сервере.</p>
                <div className={style.form}>
                    <input type="text" placeholder="Nikname" className={style.form_nikname} />
                </div>
                <div className={style.buttons}>
                  <SubmitButton onClick={() => {  } } 
                  disabled={false} 
                  loading={false} 
                  icon={""}
                  href="/profile"
                  >Продолжить</SubmitButton>
                </div>
            </AuthContainer>
        </div>
    )
}