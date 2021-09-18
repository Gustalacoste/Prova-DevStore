import styled from 'styled-components'

const Conteudo = styled.div`

    min-width: 100%;

    .new-student-box {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em 8em 2em 2em ;
        width: 100%;
    }

    .input-new-student div:nth-child(1) {
        margin-right: 2.5em;
        margin-left: 3em;
    }

    .input-new-student div:nth-child(2) {
        margin-right: 20em;
    }

    .input-new-student div:nth-child(4) {
        margin-right: 20em;
    }

    .input-new-student div:nth-child(3) {
        margin-right: 2em;
        margin-left: 1.4em;
    }

    .input-new-student div:nth-child(5) {
        margin-right: 3em;
        margin-left: 1.3em;
    }

    .input-new-student div:nth-child(8) {
        margin-right: 1.1em;
        margin-left: 1.3em;
    }


    .bar-new-student {
        border: 3px solid #2595ff;
        border-radius: .5em;
        margin-right: .4em;
        background-color: #2595ff;
    }

    .text-new-student {
        display: flex;
        flex-direction: row;

        font-size: 32px;
    }


    .text-new-student div {
        font-weight: bolder;
    }

    .input-new-student {
        display: flex;
        flex-direction: row;

        flex-wrap: wrap;
        padding-top: 2.4em;
    }


    .input {
        margin-top: .5em;
        margin-bottom: .5em;
    }

    input {
        width: 209px;
        height: 36px;

        background: #FFFFFF;
        border: 1px solid #A8A8A8;
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: .5em;

    }

    .input-img input {
    
        width: 39.5em;
        height: 36px;

        box-sizing: border-box;
        border-radius: 5px;
        padding-left: .5em;
        margin-left: 0.5em;

    }

    .input-img {
        display: flex;
        flex-direction: row;
        paddig-left: 0.5em;
    }

    .button-create {
        align-self: flex-end;
        justify-self: flex-end;
        padding-bottom: 1.5em;
    }

    .button-create  button {
        width: 106px;
        height: 36px;

        background: #2595ff;
        border-radius: 44px;
        border: none;
        color: white;
        font-size: 14px;
        margin-left: 2em;
        font-weight: bold;
    }

    .student-registered-box {
        display: flex;
        flex-direction: column;

        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
        margin-top: 2em;
        
    }
    .text-registered-student {
        display: flex;
        flex-direction: row;
        font-weight: bolder;
        font-size: 32px;
        padding-left: .3em;
    }

    .row-bar {
        display: flex;
        flex-direction: row;
    }

    .information-purple {
        display: flex;
        flex-direction: row;
        background: #6cc3df;
        width: 100%;
        height: 67px;
        color: #FFFFFF;
        justify-content: space-evenly;
        margin-top: 2em;
        align-items: center;
        font-size: 18px ;
        margin-bottom: 1em;
    }



    .gray{
        width: 100%;
        height: 61.93px;
        background: #F5F5F5;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }

    .white {
        width: 100%;
        height: 61.93px;
        background: #FFFFFF;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }

    .box-information {
        border: 1px solid #cbe6ff;
    }

    .body-right-box {
        display: flex;
        flex-direction: column;

        background-color: #F5F5F5;

        height: 100%;
        padding: 3em;
        
        margin-bottom: 0em;
        margin-right: 0em;
    }


    .reader-right-box {
        margin-top: 0em;
        padding-right: 0em;
        
    }

    td button {
        border-radius: 50%;
        background-color: #565656;
        border: none;
        width: 31px;
        height: 31px;
    }
    
    .box-image {
        margin-right: 2em;
    }

    thead {
        background-color: #6cc3df;
    }

    table {
        margin-top: 2em;
    }


    tbody {
        background-color: #F5F5F5;
    }

    td {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        font-weight: 600;
    }

    th {
        height: 61.93px;
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
    } 
    
    .table-user {
        border-collapse: collapse;
    }

    .linha-alternada {
        background-color: #fff;
    }

    .coluna-acao {
        width: .1em;
    }

    .coluna-acao > button {
        visibility: hidden;
    }

    tr:hover {
        .coluna-acao > button {
            visibility: visible;
        }
    }

    button {
        cursor: pointer;
    }

    .button-create button:hover {
        background-color: #aa3997;
        transition: 2s;
    }

    img {
        cursor: pointer;
    }

    .absolute {
        color: white;
        background-color: #2595ff;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: .7em;
    }

    .user-image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        border-radius: 50%;
        
    }

    .user-image img {
        width: 57px;
        height: 57px;
        border-radius: 50%;
        height: 57px;
        
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export { Container, Conteudo }