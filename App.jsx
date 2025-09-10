import React from "react";
import CustomButton from "./components/CustomButton.jsx";
import CustomCard from "./components/CustomCard.jsx";

export default function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Loja de Tênis</h1>

      {/* Botão customizável */}
      <CustomButton
        text="Clique aqui"
        variant="danger"
        size="lg"
        onClick={() => alert("Botão clicado!")}
      />

      <div className="row g-3 mt-3">
        <div className="col-auto">
          <CustomCard
            title="Tênis Nike Revolution 7 Masculino"
            description="Tênis de corrida, versátil e confortável."
            image="data:image/jpeg;base64,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"
            buttonText="Saiba mais"
            onButtonClick={() => alert("Você clicou no botão do card!")}
            footer="Instagram: @centaurobr"
            variant="light"
          />
        </div>

        <div className="row g-3 mt-3">
        <div className="col-auto">
          <CustomCard
            title="Tênis Nike Gamma Force - Feminino"
            description="Tênis de corrida, versátil e confortável."
            image="https://imgcentauro-a.akamaihd.net/800x800/982718QWA1.jpg"
            buttonText="Saiba mais"
            onButtonClick={() => alert("Você clicou no botão do card!")}
            footer="Instagram: @centaurobr"
            variant="light"
          />
        </div>
          
        </div>
      </div>
    </div>
  );
}
