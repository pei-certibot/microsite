import { useMemo } from 'react';
import MarkdownIt from 'markdown-it';
import BackButton from "../../components/BackButton";
import PdfFrame from "../../components/PdfFrame";
import block from "../../../public/docs/milestone2/milestone2.md?raw"; 

function MS2() {
  const pdfLink = "https://www.canva.com/design/DAG2mFpzFNM/4uG7MFzYGpscoAPdSYSQbg/view?embed";

  const md = useMemo(() => new MarkdownIt(), []);
  const content = useMemo(() => {
    const titleMatch = block.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : 'Milestone 2';
    return { title, description: block };
  }, [block]);

  return (
    <div className="px-4 lg:px-50">
      <BackButton />

      <div className="mx-auto w-full">
        <div className="h-[calc(100vh-12rem)] mb-12">
          <PdfFrame path={pdfLink} title="Milestone 2" />
        </div>

        <section className="documentation-hero text-left pb-24">
          <div className="markdown-body">
            <div dangerouslySetInnerHTML={{ __html: md.render(content.description) }} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default MS2;
