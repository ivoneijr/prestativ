import Image from 'next/image';

export default function Partners() {
  return (
    <div id="partners" className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <p className="text-center text-base font-semibold text-gray-500">
          Nossos parceiros confiam na Prestativ
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://stara-institucional-prd.s3.sa-east-1.amazonaws.com/uploads/2021/12/logo_pt-br.png"
              alt="Stara"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="data:image/png;base64,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"
              alt="SLC"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://fallgatter.com.br/wp-content/uploads/2018/05/rodape-e1525945619949.png"
              alt="Fallgatter"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://logospng.org/wp-content/uploads/arezzo.png"
              alt="Arezzo"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
