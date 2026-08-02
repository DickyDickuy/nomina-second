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
      title: 'Account Executive',
      openRoles: '(01 Open Role)',
      type: 'Full-Time',
      filterId: 'buttonFilter1',
      link: '/career-account-executive'
    },
    {
      title: '3D Designer',
      openRoles: '(01 Open Role)',
      type: 'Full-Time',
      filterId: 'buttonFilter2',
      link: '/career-3d-designer'
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
              <h3 className="tp-section-title lts tp_fade_anim">Current Openings</h3>
            </div>
          </div>
        </div>

        {/* Table Headers */}
        <div className="tp-career-opening-item">
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
          <div key={index} className="tp-career-opening-item ptb">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="tp-career-opening-title">
                  <h4 className="tp-career-opening-title-name">{job.title}</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tp-career-opening-role">
                  <span>{job.openRoles}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tp-career-opening-Type d-flex justify-content-between align-items-center">
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