<script lang="ts">
	interface WorkExperience {
		jobTitle: string;
		company: string;
		startDate: string;
		endDate?: string;
	}

	const workExperience: WorkExperience[] = [
		{
			jobTitle: 'Front-End Developer',
			company: 'HUBBY eSIM',
			startDate: '2024-11-01'
		},
		{
			jobTitle: 'WordPress Developer',
			company: 'Inventive',
			startDate: '2024-11-10'
		},
		{
			jobTitle: 'Web Development Intern',
			company: 'Moxelle',
			startDate: '2024-08-01',
			endDate: '2024-10-30'
		},
		{
			jobTitle: 'Digital Marketing Specialist',
			company: '6Pro Marketing',
			startDate: '2021-11-01',
			endDate: '2024-07-31'
		}
	];
</script>

<section class="default-margin work-experience mt-m">
	<ul class="work-experience-list">
		{#each workExperience as job}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
					<div class="company-and-date">
						<p>{job.company}</p>
						<p class="dark-grey">
							{job.startDate}
							{#if job.endDate}
								- {job.endDate}
							{:else}
								- Present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h2 class="headline-m">Past Work <br /> Experience</h2>
</section>

<style>
	.work-experience {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.work-experience-list {
		width: 50%;
	}

    .headline {
        text-align: right;
    }

	.work-item {
		border-bottom: 1px solid #f0eded;
		padding-bottom: 12px;
	}

	.work-item:not(:first-of-type) {
        padding-top: 16px;
    }

    .work-item p {
        margin-bottom: 0;
    }

	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
</style>
