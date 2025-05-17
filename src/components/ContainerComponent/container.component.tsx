import { Container } from "./container.styles"

type ContainerProps = {
    children: React.ReactNode;
}

const ContainerComponent = ({children}: ContainerProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ContainerComponent;