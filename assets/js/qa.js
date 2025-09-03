<script>
window.runGG360QA=()=>{try{
  const slug=(location.pathname.split('/').pop()||'').replace('.html','');
  const links=[...document.querySelectorAll('a[href]')];
  const by=(re)=>links.filter(a=>re.test(a.href));
  const flights=by(/skyscanner/i), hotels=by(/booking\.(com|xx)/i),
        gygs=by(/getyourguide/i), tavs=by(/tripadvisor/i);
  const iso=/\b20[2-5]\d-[01]\d-[0-3]\d\b/;
  const has=(u,k,v)=>{try{u=new URL(u);const x=u.searchParams.get(k);return v?x===v:(x!==null&&x!=='')}catch{return false}};
  const chkF=u=>({dom:/skyscanner/i.test(u),date:(u.match(iso)||[]).length>=1});
  const chkH=u=>({dom:/booking\.(com|xx)/i.test(u),in:has(u,'checkin')||iso.test(u),out:has(u,'checkout')||iso.test(u),ss:has(u,'ss')});
  const chkG=u=>({dom:/getyourguide/i.test(u),pid:has(u,'partner_id','HWU00MZ'),
                  sid:(()=>{try{const q=(new URL(u)).searchParams.get('sub_id')||'';return q.toLowerCase().includes(slug.toLowerCase())}catch{return false}})()});
  const chkT=u=>({dom:/tripadvisor/i.test(u)});
  const ev=(arr,fn,type)=>arr.map(a=>({type,txt:a.textContent.trim(),href:a.href,ok:Object.values(fn(a.href)).every(Boolean),...fn(a.href)}));
  const res=[...ev(flights,chkF,'flight'),...ev(hotels,chkH,'hotel'),...ev(gygs,chkG,'gyg'),...ev(tavs,chkT,'tripadvisor')];
  const fails=res.filter(r=>!r.ok);
  const rows=res.map(r=>({type:r.type,ok:r.ok,txt:r.txt,href:r.href,dom:r.dom,date:r.date,in:r.in,out:r.out,ss:r.ss,pid:r.pid,sid:r.sid}));
  const wrap=document.createElement('div');
  wrap.style.cssText="position:fixed;inset:20px auto auto 20px;max-width:95vw;z-index:99999;background:#fff;border:1px solid #ddd;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.15);";
  wrap.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid #eee">
      <strong>QA Link – ${fails.length? '❌ '+fails.length+' non conformi':'✅ tutto ok'}</strong>
      <button aria-label="close" style="border:none;background:transparent;font-size:18px">×</button>
    </div>
    <div style="max-height:60vh;overflow:auto;padding:10px 14px;font:12px/1.4 system-ui,Segoe UI,Roboto">
      <table style="border-collapse:collapse;width:100%">
        <thead><tr>
          <th style="text-align:left;padding:6px;border-bottom:1px solid #eee">type</th>
          <th style="text-align:left;padding:6px;border-bottom:1px solid #eee">ok</th>
          <th style="text-align:left;padding:6px;border-bottom:1px solid #eee">href</th>
          <th style="text-align:left;padding:6px;border-bottom:1px solid #eee">note</th>
        </tr></thead>
        <tbody>
          ${rows.map(r=>`<tr>
            <td style="padding:6px;border-bottom:1px solid #f4f4f4">${r.type}</td>
            <td style="padding:6px;border-bottom:1px solid #f4f4f4">${r.ok?'✅':'❌'}</td>
            <td style="padding:6px;border-bottom:1px solid #f4f4f4;word-break:break-all"><a href="${r.href}" target="_blank">${r.href}</a></td>
            <td style="padding:6px;border-bottom:1px solid #f4f4f4">
              ${r.type==='flight' ? (!r.date?'manca una data; ':'') : ''}
              ${r.type==='hotel' ? (!r.in?'no checkin; ':'')+(!r.out?'no checkout; ':'')+(!r.ss?'no ss; ':'') : ''}
              ${r.type==='gyg' ? (!r.pid?'no partner_id; ':'')+(!r.sid?'no sub_id coerente; ':'') : ''}
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  wrap.querySelector('button').onclick=()=>wrap.remove();
  document.body.appendChild(wrap);
}catch(e){alert('QA errore: '+e.message)}};
</script>
