import { ArrowSvg, ButtonBlurFilter } from '@/svg';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import Link from 'next/link';

interface JobOpening {
  title: string;
  openRoles: string;
  type: string;
  filterId: string;
  link: string;
}

const CareerOpening = () => {
  const jobOpenings: JobOpening[] = [
    {
      title: 'Project Manager',
      openRoles: '(01 Open Role)',
      type: 'Full-Time',
      filterId: 'buttonFilter1',
      link: '/job-application?jobId=project-manager'
    },
    {
      title: 'Production Manager',
      openRoles: '(01 Open Role)',
      type: 'Full-Time',
      filterId: 'buttonFilter2',
      link: '/job-application?jobId=production-manager'
    },
    {
      title: 'Sales and Account Manager',
      openRoles: '(01 Open Role)',
      type: 'Full-Time',
      filterId: 'buttonFilter3',
      link: '/job-application?jobId=sales-and-account-manager'
    },
    {
      title: '3D Visualisation',
      openRoles: '(01 Open Role)',
      type: 'Full-Time',
      filterId: 'buttonFilter4',
      link: '/career-3d-visualisation'
    }
  ];

  const ApplyButton = ({ filterId, link }: { filterId: string; link: string }) => (
    <Link href={link} className="tp-btn-black btn-red-bg">
      <span className="tp-btn-black-filter-blur">
        <ButtonBlurFilter filterId={filterId} />
      </span>
      <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: `url(#${filterId})` }}>
        <span className="tp-btn-black-text">Apply Now</span>
        <span className="tp-btn-black-circle">
          <ArrowSvg />
        </span>
      </span>
    </Link>
  );

  return (
    <section className="tp-career-opening-ptb pt-160 pb-50">
      <div className="container container-1230">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-benefit-heading mb-100">
              <div className="ar-about-us-4-title-box tp_fade_anim d-flex align-items-center mb-15">
                <span className="tp-section-subtitle pre">Join Nomina</span>
                <div className="ar-about-us-4-icon">
                  <ArrowTwenty />
                </div>
              </div>
              <h2 className="tp-section-title lts tp_fade_anim">Current Openings</h2>
            </div>
          </div>
        </div>

        {/* Table Headers */}
        <div className="tp-career-opening-item d-none d-lg-block">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-career-opening-heading">
                <span>Position</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-career-opening-heading">
                <span>Roles</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-career-opening-heading">
                <span>Type</span>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        {jobOpenings.map((job, index) => (
          <div key={index} className="tp-career-opening-item ptb tp_fade_anim">
            <div className="row align-items-center">
              <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                <div className="tp-career-opening-title">
                  <h3 className="tp-career-opening-title-name">
                    <Link href={job.link}>{job.title}</Link>
                  </h3>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                <div className="tp-career-opening-role">
                  <span>{job.openRoles}</span>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="tp-career-opening-Type d-flex flex-column flex-sm-row justify-content-sm-between align-items-start align-items-sm-center gap-3 gap-sm-0">
                  <span>{job.type}</span>
                  <div className="tp-career-opening-btn">
                    <ApplyButton filterId={job.filterId} link={job.link} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerOpening;