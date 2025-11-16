import { useMemo } from 'react';
import MarkdownIt from 'markdown-it';
import BackButton from "../../components/BackButton";
import PdfFrame from "../../components/PdfFrame";
import block from "../../../public/docs/milestone1/milestone1.md?raw"; 

function MS1() {
  const pdfLink = "https://www.canva.com/design/DAG2mFpzFNM/4uG7MFzYGpscoAPdSYSQbg/view?embed";

  const md = useMemo(() => new MarkdownIt(), []);
  const content = useMemo(() => {
    const titleMatch = block.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : 'Milestone 1';
    return { title, description: block };
  }, [block]);

  return (
    <div className="px-4 lg:px-50">
      <BackButton />

      <div className="mx-auto w-full">
        <div className="h-[calc(100vh-12rem)] mb-12">
          <PdfFrame path={pdfLink} title="Milestone 1" />
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

export default MS1;
