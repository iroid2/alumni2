'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '../global/SubmitButton';
import TextInput from '../global/Textinput';
import toast from 'react-hot-toast';
import { getServerSession } from 'next-auth';

type FormData = {
  employmentStatus: string;
  organization?: string;
  jobAcquisitionTime?: string;
  selectedAccordingToQualification?: string;
  jobInLineWithStudy?: string;
  studyProgramRelevance?: string;
  curriculumRecommendations?: string;
  businessType?: string;
  businessRelatedToStudy?: string;
  selfEmploymentReason?: string;
  capitalSource?: string;
  skillsRelevance?: string;
  skillsRecommendations?: string;
  employedBefore?: string;
  reasonLeftJob?: string;
  skillsNeeded?: string;
  supportNeeded?: string;
  courseRelevance?: string;
  recommendations?: string;
};


export default async function MoreInfoForm() {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [step, setStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState<'submitted' | null>(null);
  const [employmentStatus, setEmploymentStatus] = useState('');
  const status = watch('employmentStatus');

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setSubmissionStatus('submitted');
  };
  
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  
  const handleBack = () => {
    setStep((prev) => prev - 1);
  };
  
  if (submissionStatus === 'submitted') {
    toast.success("Thanks for submiting KYU Alumni")
    return (
      <div className="w-[50%] mx-auto">
        <h2 className='font-bold text-2xl'>Thank You for Your Submission!</h2>
        <p className="animate-pulse">Your information has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="w-[50%] mx-auto">
        <h2 className='font-bold text-2xl'>Enter More Information about You</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-3 pt-3">
                <label htmlFor="employmentStatus">Are you currently employed/self-employed?</label>
                <select
                  {...register('employmentStatus', { required: 'Please select your employment status' })}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="unemployed">Unemployed</option>
                </select>
                {errors.employmentStatus && <p className="text-red-500">{errors.employmentStatus.message}</p>}
              </div>
            </div>
          )}

          {step === 2 && status === 'employed' && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-3 pt-3">
                <label htmlFor="organization">What organization do you belong to?</label>
                <select {...register('organization', { required: 'Please select an organization type' })}>
                  <option value="">Select...</option>
                  <option value="private">Private</option>
                  <option value="ngo">NGO</option>
                  <option value="government">Government</option>
                </select>
                {errors.organization && <p className="text-red-500">{errors.organization.message}</p>}
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="How long did it take you to acquire your first job after graduation?"
                  name="jobAcquisitionTime"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <label>Were you selected according to your qualification?</label>
                <div>
                  <label>
                    <input type="radio" value="yes" {...register('selectedAccordingToQualification')} />
                    Yes
                  </label>
                  <label>
                    <input type="radio" value="no" {...register('selectedAccordingToQualification')} />
                    No
                  </label>
                </div>
              </div>
              <div className="grid gap-3 pt-3">
                <label>Is your current job in line with what you studied?</label>
                <div>
                  <label>
                    <input type="radio" value="yes" {...register('jobInLineWithStudy')} />
                    Yes
                  </label>
                  <label>
                    <input type="radio" value="no" {...register('jobInLineWithStudy')} />
                    No
                  </label>
                </div>
              </div>
              <div className="grid gap-3 pt-3">
                <label>Was your study programme relevant to you in searching for a job?</label>
                <div>
                  <label>
                    <input type="radio" value="yes" {...register('studyProgramRelevance')} />
                    Yes
                  </label>
                  <label>
                    <input type="radio" value="no" {...register('studyProgramRelevance')} />
                    No
                  </label>
                </div>
              </div>
              {watch('studyProgramRelevance') === 'no' && (
                <div className="grid gap-3 pt-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="What changes would you recommend to the curriculum developers?"
                    name="curriculumRecommendations"
                  />
                </div>
              )}
            </div>
          )}

          {step === 3 && status === 'self-employed' && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-3 pt-3">
                <label>What type of business are you engaged in?</label>
                <select {...register('businessType', { required: 'Please select a business type' })}>
                  <option value="">Select...</option>
                  <option value="farming">Farming</option>
                  <option value="trading">Trading</option>
                  <option value="fishing">Fishing</option>
                  <option value="others">Others</option>
                </select>
                {errors.businessType && <p className="text-red-500">{errors.businessType.message}</p>}
              </div>
              <div className="grid gap-3 pt-3">
                <label>Is your business related to your course of study?</label>
                <div>
                  <label>
                    <input type="radio" value="yes" {...register('businessRelatedToStudy')} />
                    Yes
                  </label>
                  <label>
                    <input type="radio" value="no" {...register('businessRelatedToStudy')} />
                    No
                  </label>
                </div>
              </div>
              <div className="grid gap-3 pt-3">
                <label>What were the reasons for engaging in self-employment?</label>
                <select {...register('selfEmploymentReason')}>
                  <option value="">Select...</option>
                  <option value="higher-income">Higher income</option>
                  <option value="no-job">Failure to acquire a job after graduation</option>
                  <option value="flexibility">Flexibility</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="grid gap-3 pt-3">
                <label>What was your source of capital?</label>
                <select {...register('capitalSource')}>
                  <option value="">Select...</option>
                  <option value="angel-investors">Angel investors</option>
                  <option value="government-funds">Government funds</option>
                  <option value="personal-savings">Personal savings</option>
                  <option value="family-funding">Family funding</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="grid gap-3 pt-3">
                <label>Were the skills taught in your course relevant for your current venture?</label>
                <div>
                  <label>
                    <input type="radio" value="yes" {...register('skillsRelevance')} />
                    Yes
                  </label>
                  <label>
                    <input type="radio" value="no" {...register('skillsRelevance')} />
                    No
                  </label>
                </div>
              </div>
              {watch('skillsRelevance') === 'no' && (
                <div className="grid gap-3 pt-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="If No, what recommendations would you give to enhance skills?"
                    name="skillsRecommendations"
                  />
                </div>
              )}
            </div>
          )}

          {step === 4 && status === 'unemployed' && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-3 pt-3">
                <label>Have you been employed before?</label>
                <div>
                  <label>
                    <input type="radio" value="yes" {...register('employedBefore')} />
                    Yes
                  </label>
                  <label>
                    <input type="radio" value="no" {...register('employedBefore')} />
                    No
                  </label>
                </div>
              </div>
              {watch('employedBefore') === 'yes' && (
                <div className="grid gap-3 pt-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="If yes, why did you leave your previous job?"
                    name="reasonLeftJob"
                  />
                </div>
              )}
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="What skills or training do you feel are needed to improve your employability?"
                  name="skillsNeeded"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="How can the alumni association/university support you in your job search?"
                  name="supportNeeded"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <label>Was your course of study relevant?</label>
                <div>
                  <label>
                    <input type="radio" value="yes" {...register('courseRelevance')} />
                    Yes
                  </label>
                  <label>
                    <input type="radio" value="no" {...register('courseRelevance')} />
                    No
                  </label>
                </div>
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="What recommendations would you give to curriculum developers to enhance skills?"
                  name="recommendations"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between my-5">
            {step > 1 && (
              <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded">
                Back
              </button>
            )}
            {step < 4 ? (
              <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">
                Next
              </button>
            ) : (
              <SubmitButton title='Submit' loading={false} className='bg-blue-500 text-white px-4 py-2 rounded' />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
