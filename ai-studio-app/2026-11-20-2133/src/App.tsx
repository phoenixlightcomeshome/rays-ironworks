import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactFooter } from './components/ContactFooter';
import { DesignStudio3D } from './components/DesignStudio3D';
import { DigitalArtSection } from './components/DigitalArtSection';
import { ForgeGuide } from './components/ForgeGuide';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ImageLightbox, LightboxImage } from './components/ImageLightbox';
import { ProjectsSection } from './components/ProjectsSection';
import { QuoteForm, QuoteFormState } from './components/QuoteForm';
import { ServicesSection } from './components/ServicesSection';
import { TechnicalDrawings } from './components/TechnicalDrawings';
import { DrawingTabSpec } from './data/ironworksData';
import { ConfiguratorState, PieceType } from './types/configurator';
import { CutShareFormat, decodeCutShareHash } from './utils/cutShare';

const PIECE_TO_DRAWING_TAB: Record<PieceType, DrawingTabSpec['id']> = {
  gate: 'gate',
  railing: 'railing',
  'sculpture-base': 'sculpture',
  'sign-frame': 'sign',
  'patio-cover': 'patio',
};

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(
    null,
  );
  const [helperOpen, setHelperOpen] = useState(false);
  const [helperPrefill, setHelperPrefill] = useState<string | null>(null);
  const [drawingTab, setDrawingTab] = useState<DrawingTabSpec['id']>('gate');
  const [initialCutShare, setInitialCutShare] = useState<{
    format: CutShareFormat;
    config: ConfiguratorState;
  } | null>(null);

  useEffect(() => {
    const checkHash = async () => {
      if (window.location.hash && window.location.hash.includes('#cut=')) {
        const decoded = await decodeCutShareHash(window.location.hash);
        if (decoded) {
          setInitialCutShare(decoded);
          setDrawingTab(PIECE_TO_DRAWING_TAB[decoded.config.piece]);
          requestAnimationFrame(() => {
            document
              .getElementById('quote')
              ?.scrollIntoView({ behavior: 'smooth' });
          });
        }
      }
    };
    void checkHash();
    const onHash = () => void checkHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const [quoteForm, setQuoteForm] = useState<QuoteFormState>({
    name: '',
    email: '',
    phone: '',
    type: '',
    size: '',
    location: '',
    timeline: 'Flexible',
    budget: 'Prefer not to say',
    desc: '',
    photos: [],
  });
  const [quoteStatus, setQuoteStatus] = useState<{
    text: string;
    kind: '' | 'ok' | 'warn';
  }>({ text: '', kind: '' });

  const openHelperWithQuestion = (q: string) => {
    setHelperPrefill(q);
    setHelperOpen(true);
  };

  const scrollToQuoteForm = () => {
    document
      .getElementById('quote-form')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartQuoteFromTab = (quoteType: string) => {
    setQuoteForm((prev) => ({ ...prev, type: quoteType }));
    setQuoteStatus({
      text: `Project type set to “${quoteType}”. Fill in the rest below.`,
      kind: 'ok',
    });
    scrollToQuoteForm();
  };

  const handleUseStudioInQuote = ({
    quoteType,
    size,
    descriptionLine,
  }: {
    quoteType: string;
    size: string;
    descriptionLine: string;
  }) => {
    setQuoteForm((prev) => ({
      ...prev,
      type: quoteType,
      size,
      desc: prev.desc
        ? `${prev.desc.replace(/\s+$/, '')}\n${descriptionLine}`
        : descriptionLine,
    }));
    setQuoteStatus({
      text: `Your configured piece was added to the quote: ${descriptionLine} Fill in your name, email, and any photos below.`,
      kind: 'ok',
    });
    scrollToQuoteForm();
  };

  return (
    <div id="top" className="min-h-screen bg-[#0e0e10] text-[#f2efe8]">
      <Header />

      <main>
        <HeroSection />
        <AboutSection onOpenLightbox={setLightboxImage} />
        <ServicesSection onOpenHelper={openHelperWithQuestion} />
        <ProjectsSection onOpenLightbox={setLightboxImage} />
        <GallerySection
          onOpenLightbox={setLightboxImage}
          onOpenHelper={openHelperWithQuestion}
        />

        <section
          id="quote"
          data-forge-section="quote"
          className="py-16 sm:py-20"
        >
          <div className="max-w-[1160px] mx-auto px-5">
            <p className="font-display uppercase tracking-[0.22em] text-xs sm:text-sm text-[#c9883d] mb-2">
              Design &amp; quote
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#f2efe8] mb-4">
              Plan Your Project — 3D &amp; Technical Drawings
              <span className="block w-16 h-[3px] bg-[#c9883d] mt-3" />
            </h2>
            <p className="text-lg text-[#d8d2c8] max-w-[760px] mb-5">
              Configure your piece in the 3D Design Studio, switch to the 2D
              blueprint, explore how each project type is drawn and measured,
              upload photos of your own ideas, and send Ray a quote request.
              Every commission is priced to the job — this page helps you
              describe yours clearly so the quote comes back fast.
            </p>

            <p className="bg-[#1a1409] border border-[#4a3a18] rounded-xl p-4 sm:px-5 text-[#e6d9b8] text-[15px]">
              <strong className="text-[#e8a317]">
                How this page works — plainly:
              </strong>{' '}
              this website has no server. The drawings and the 3D viewer run
              entirely in your browser, and your photos stay on your device —
              they are never uploaded anywhere. When you send a quote request,
              your email app opens with everything written out; you attach your
              photos to that email before sending. If email doesn&rsquo;t open,
              you can download or copy the request instead.
            </p>

            <DesignStudio3D
              initialCutShare={initialCutShare}
              onUseInQuote={handleUseStudioInQuote}
              onSelectPieceForGuide={(piece) =>
                setDrawingTab(PIECE_TO_DRAWING_TAB[piece])
              }
            />

            <TechnicalDrawings
              activeTab={drawingTab}
              onChangeTab={setDrawingTab}
              onStartQuote={handleStartQuoteFromTab}
            />

            <QuoteForm
              form={quoteForm}
              status={quoteStatus}
              onChange={setQuoteForm}
              onStatus={(text, kind) => setQuoteStatus({ text, kind })}
            />

            <p className="mt-5">
              <button
                type="button"
                onClick={() =>
                  openHelperWithQuestion(
                    'Help me describe my idea for a quote',
                  )
                }
                className="text-sm text-[#e8a317] underline underline-offset-4 hover:text-[#f2efe8] cursor-pointer bg-transparent border-0 p-0"
              >
                Not sure how to describe your idea? The helper can walk you
                through it
              </button>
            </p>
          </div>
        </section>

        <DigitalArtSection />
        <ContactFooter
          onOpenHelper={openHelperWithQuestion}
          onOpenLightbox={setLightboxImage}
        />
      </main>

      <ForgeGuide
        open={helperOpen}
        prefillQuestion={helperPrefill}
        onClearPrefill={() => setHelperPrefill(null)}
        onToggleOpen={setHelperOpen}
        quoteForm={quoteForm}
        onFillQuoteFromGuide={setQuoteForm}
      />

      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
