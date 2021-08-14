import React from 'react';
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoGitBranch,
  IoLogoNodejs,
  IoTerminal,
  IoLogoSass,
  IoLogoFigma,
} from 'react-icons/io5';
import { DiJqueryLogo } from 'react-icons/di';
import { FcMultipleDevices } from 'react-icons/fc';
import { FaAccessibleIcon, FaGithub } from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiStyledComponents,
  SiVisualstudiocode,
  SiNpm,
} from 'react-icons/si';

const SkillsTools = () => {
  return (
    <div id='tools' className='skills'>
      <div className='section-header sm-font'>my toolbox</div>
      <h2>Skills & Tools</h2>
      <div className='skill-icons'>
        <div className='icon-set'>
          <div className='icon-wrapper'>
            <IoLogoReact aria-hidden='true' className='react' />
            <span>react</span>
          </div>
          <div className='icon-wrapper'>
            <SiTypescript aria-hidden='true' className='typescript' />
            <span>typescript</span>
          </div>
          <div className='icon-wrapper'>
            <SiRedux aria-hidden='true' className='typescript' />
            <span>redux</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoJavascript aria-hidden='true' className='javascript' />
            <span>javascript</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoHtml5 aria-hidden='true' className='html' />
            <span>html5</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoCss3 aria-hidden='true' className='css' />
            <span>css3</span>
          </div>
          <div className='icon-wrapper'>
            <SiStyledComponents aria-hidden='true' className='css' />
            <span>styled</span>
          </div>
          <div className='icon-wrapper'>
            <DiJqueryLogo aria-hidden='true' className='jquery' />
            <span>jquery</span>
          </div>
          <div className='icon-wrapper'>
            <IoGitBranch aria-hidden='true' className='git' />
            <span>git</span>
          </div>
          <div className='icon-wrapper'>
            <FaGithub aria-hidden='true' className='css' />
            <span>github</span>
          </div>
          <div className='icon-wrapper'>
            <SiNpm aria-hidden='true' className='html' />
            <span>npm</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoNodejs aria-hidden='true' className='nodejs' />
            <span>nodeJS</span>
          </div>
          <div className='icon-wrapper'>
            <IoTerminal aria-hidden='true' className='terminal' />
            <span>terminal</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoSass aria-hidden='true' className='sass' />
            <span>sass</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoFigma aria-hidden='true' className='figma' />
            <span>figma</span>
          </div>
          <div className='icon-wrapper'>
            <FcMultipleDevices aria-hidden='true' className='devices' />
            <span>response</span>
          </div>
          <div className='icon-wrapper'>
            <FaAccessibleIcon aria-hidden='true' className='layout' />
            <span>a11y</span>
          </div>
          <div className='icon-wrapper'>
            <SiVisualstudiocode aria-hidden='true' className='devices' />
            <span>vscode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTools;
