import './styles/App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <div className="container">
      <h1 className="text-center">Checkout de Viagem</h1>

      <form id="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="data-ida" className="form-label">Data de Ida:</label>
          <input type="date" id="data-ida" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="data-volta" className="form-label">Data de Volta:</label>
          <input type="date" id="data-volta" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="passageiros-adultos" className="form-label">Passageiros Adultos:</label>
          <input type="number" id="passageiros-adultos" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="passageiros-criancas" className="form-label">Passageiros Crianças:</label>
          <input type="number" id="passageiros-criancas" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="origem" className="form-label">Origem:</label>
          <input type="text" id="origem" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="destino" className="form-label">Destino:</label>
          <input type="text" id="destino" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="nome-passageiro" className="form-label">Nome do Passageiro Principal:</label>
          <input type="text" id="nome-passageiro" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="email-passageiro" className="form-label">E-mail do Passageiro Principal:</label>
          <input type="email" id="email-passageiro" className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>

      <div id="mensagem-confirmacao" className="hidden"></div>
    </div>
  );
}

export default App;
