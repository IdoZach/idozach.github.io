res_dir = 'res_imgs/';
cd C:\Users\ido\Dropbox\Grad\yyz\nst_deblur_project
mkdir('website/');
wedb = './website/';
pre = {'gt','deg','our','wv','fattal','irani','levin'};
desc = {'Ground truth','Blurred','Our','Our+wv','Goldstein','Michaeli','Levin'};

files = dir(res_dir);
files = files(4:end); % first is 'all.png';
tot_exps=90;
ff = fopen('index.html','w');
fprintf(ff,'<table
for i=1:length(exps)
    im={};
    for k=1:length(pre)
        fn = [res_dir,'exp_',num2str(i),'_',pre{k},'.png'];
        
        
    end
    
end

%%



savepath = './';
%save([savepath sprintf('res_cur_%d.mat',round(rand*1000))],'Res');
html = fopen([savepath 'images.html'],'w');
fprintf(html,'<table border=1><tr>');
fprintf(html,'<td><b>Original<td><b>Blurred<td><b>Our [1]<td><b>Our+wv [1]<td><b>Goldstein and Fattal [2]<td><b>Michaeli and Irani [3]<td><b>Levin et al. [4]\n<tr>');
%proctime_map=14.464; %tbd
%proctime_bm3d=1.522; %tbd
%fprintf(html,['<td>Mean running time:<td><td>%1.3fs'], proctime_map);
%fprintf(html,['<td>%1.3fs'], proctime_tv);
%fprintf(html,['<td>%1.3fs'], proctime_nlm);
%fprintf(html,['<td>%1.3fs'], proctime_curvelets);
%fprintf(html,['<td>%1.3fs'], proctime_bm3d);
%fprintf(html,['<td>%1.3fs'], proctime_ipp);
%fprintf(html,['<td>%1.3fs'], proctime_gmm);

%fprintf(html,'<tr>\n');
        
per=100;
for i=1:tot_exps
    %fprintf(html,['<td>' num2str(k)]);
    for k=1:length(pre)
        fn = [res_dir,'exp_',num2str(i),'_',pre{k},'.png'];
        if ~exist(fn,'file')
            break
        end
        fprintf(html,['<td><img width="180px" src="'  fn '">\n']);
    end

    fprintf(html,'<tr>\n');
        
end




fprintf(html,'</table>');

%%