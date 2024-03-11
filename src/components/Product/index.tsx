import {
  Botao,
  Card,
  Carde,
  Cards,
  Descricao,
  LogoCard,
  Section,
  Span,
  Span2,
  Titulo
} from './styles'
import WorldImg from '../../assets/images/worldw.svg'
import servidor from '../../assets/images/servidor.svg'
import ideia from '../../assets/images/ideia.svg'
import movel from '../../assets/images/aplicativo-movel 1.png'

const Product = () => (
  <>
    <Section>
      <Span>
        <Span>
          O jeito certo de impulsionar <Span2>o seu negócio!</Span2>
        </Span>{' '}
      </Span>
      <Cards>
        <Card>
          <LogoCard>
            <img src={WorldImg} />
          </LogoCard>
          <Carde>
            <Titulo>Desenvolvimento de sites</Titulo>
            <Descricao>
              Sites personalizados e responsivos para o seu negócio
            </Descricao>
            <Botao href="">Saiba Mais</Botao>{' '}
          </Carde>
        </Card>
        <Card>
          <LogoCard>
            <img src={servidor} />
          </LogoCard>
          <Carde>
            <Titulo>Hospedagem de sites</Titulo>
            <Descricao>
              Alto desempenho e segurança para o seu site com recursos dedicados
              e controle total sobre seu dominio
            </Descricao>
            <Botao href="">Saiba Mais</Botao>{' '}
          </Carde>
        </Card>
        <Card>
          <LogoCard>
            <img src={ideia} />
          </LogoCard>
          <Carde>
            <Titulo>Identidade Visual</Titulo>
            <Descricao>Transforme a sua marca em referência</Descricao>
            <Botao href="">Saiba Mais</Botao>{' '}
          </Carde>
        </Card>
        <Card className="Carda">
          <LogoCard>
            <img src={movel} />
          </LogoCard>
          <Carde>
            <Titulo>Desenvolvimento de aplicativos</Titulo>
            <Descricao>
              Aplicativos personalizados com funcionalidades ideais para o seu
              negócio
            </Descricao>
            <Botao href="">Saiba Mais</Botao>{' '}
          </Carde>
        </Card>
      </Cards>
    </Section>
  </>
)

export default Product
