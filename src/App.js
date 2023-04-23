
import styled, {keyframes} from "styled-components";

const Wrapper  = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor}
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: tomato;
`;


const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box2 = styled.div`
  heigth: 200px;
  width: 200px;
  background-color: tomato;

  display: flex;
  justify-content: center;
  align-itens: center;

  animation: ${rotationAnimation} 1s linear infinite;

  span {
    font-size: 36px;
    &:hober {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }

  span:hober {
    font-size: 40px;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme. textColor};
`;


function App() {
  return (
    <Wrapper>
      <Title>TITLE</Title>
      <Box bgColor="teal">
        <Text></Text>
      </Box>
      <Box bgColor="tomato"></Box>
      <Circle bgColor="tomato"></Circle>
      <Btn></Btn>
      <Btn as="a" href="/">Log in</Btn>

      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>

      <Box2>A</Box2>

    </Wrapper>
  )
}

export default App;
