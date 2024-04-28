import styled from 'styled-components'

const Input = styled.article`

    form {
        width: 20%;
        margin: 2em 0;
        margin-bottom: 1em;
        display: grid
    }

    label {
        margin-bottom: .6em;
        font-weight: bold;
    }

    input {
        padding: .7em;
        border-radius: 0.5em;
        border: 1;
    }

    input[name="sobre voce"] {
        height: 30vh

      }



  
`

export {Input}

/*
  .form_control {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
    }

    .form_control label {
        margin-bottom: .6em;
        font-weight: bold;
    }

    .form_control input {
        padding: .7em;
        border-radius: 0;
        border: none;
    }

    .form_control input::placeholder {
        color: #7b7b7b
    }
    
    */